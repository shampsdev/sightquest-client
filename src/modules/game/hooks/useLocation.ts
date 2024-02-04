import { useEffect } from 'react';
import * as Location from 'expo-location';
import * as TaskManager from 'expo-task-manager';
import EventEmitter from 'eventemitter3';
import { ICoords } from '@/interfaces/ICoords';

export const event = new EventEmitter();
export const LOCATION_TASK_NAME = 'background-location-task';

export const useLocation = () => {
  let callback: ((data: ICoords) => void) | null;

  const setPositionUpdateCallback = (cb: (data: ICoords) => void) => {
    callback = cb;
  };

  useEffect(() => {
    const startLocationUpdates = async () => {
      await requestPermissions();

      await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
        accuracy: Location.Accuracy.Highest,
        timeInterval: 5000, // Get updates every 5 seconds
        distanceInterval: 0, // or specify a distance interval, in meters
        foregroundService: {
          notificationTitle: 'Location Tracking',
          notificationBody: 'Your location is being tracked in the background.',
        },
      });
    };

    startLocationUpdates();
    event.on('location_update', (data: ICoords) => {
      if (callback != null) callback(data);
    });

    return () => {
      Location.stopLocationUpdatesAsync(LOCATION_TASK_NAME);
    };
  }, []);

  return { setPositionUpdateCallback };
};

const requestPermissions = async () => {
  const { status: foregroundStatus } =
    await Location.requestForegroundPermissionsAsync();
  if (foregroundStatus === 'granted') {
    const { status: backgroundStatus } =
      await Location.requestBackgroundPermissionsAsync();
    if (backgroundStatus === 'granted') {
      await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
        accuracy: Location.Accuracy.Balanced,
      });
    }
  }
};

type LocationTaskParams = {
  locations: Array<Location.LocationObject>;
};

TaskManager.defineTask<LocationTaskParams>(
  LOCATION_TASK_NAME,
  ({ data, error }) => {
    if (error) {
      console.error(error);
      return;
    }
    if (data) {
      const { locations } = data;
      event.emit('location_update', {
        latitude: locations[0].coords.latitude,
        longitude: locations[0].coords.longitude,
      });
    }
  }
);
