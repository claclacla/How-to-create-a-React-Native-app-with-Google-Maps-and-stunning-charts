import { IAPILocation } from '../api/locations';
import { ILocalStorageLocation } from '../localStorage/locations';

export function mapAPILocationToLocalStorage(APILocations: IAPILocation[]) {
    let localStorageLocations: ILocalStorageLocation[];

    localStorageLocations = APILocations.map((APILocation) => {
        let localStorageLocation: ILocalStorageLocation = {
            name: APILocation.name,
            latitude: APILocation.latitude,
            longitude: APILocation.longitude
        }

        return localStorageLocation;
    });

    return localStorageLocations;
}