import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',  // This makes the service available globally
})
export class PlacesService {
    getPlaces() {
        return ["LA", "NY", "NZ", "IND"];
    }
}