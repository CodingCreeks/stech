import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';


import { AuthService } from 'app/auth/auth.service';
import { Contact } from 'app/contact/contact.model';
import { ContactService } from 'app/contact/contact.service';

@Injectable()
export class DataStorageService {

    constructor(
        private http: Http,
        private contactService: ContactService,
        private authService: AuthService) { }

    storeRecipes() {
        const token = this.authService.getToken();
        return this.http.put('https://recipebook-e33d8.firebaseio.com/recipes.json?auth=' + token, this.contactService.getContacts());
    }

    getRecipes() {

        const token = this.authService.getToken();

        this.http.get('https://recipebook-e33d8.firebaseio.com/recipes.json?auth=' + token)
            .map(
            (response: Response) => {
                const contacts: Contact[] = response.json();
                // for (let contact of contacts) {
                //     if (!recipe['ingredients']) {
                //         console.log(recipe);
                //         recipe['ingredients'] = []
                //     }
                // }
                return contacts;
            }
            )
            .subscribe(
            (contacts: Contact[]) => {
                this.contactService.setContacts(contacts);
            });
    }

}

