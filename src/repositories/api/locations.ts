export interface IAPILocation {
    latitude: number
    longitude: number
    name: string
}

function simulateDelay(): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, 4000));
}

export async function getAPILocations() {
    let locations: IAPILocation[];

    await simulateDelay();

    locations = [
        {
            latitude: 41.90,
            longitude: 12.49,
            name: "Roma"
        },
    ];

    return locations;
}