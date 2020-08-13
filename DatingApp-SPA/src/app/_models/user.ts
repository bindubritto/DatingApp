import { Photo } from './photo';

export interface User {
    id: number;
    username: string;
    gender: string;
    age: number;
    knownAs: string;
    created: Date;
    lastActive: Date;
    city: string;
    country: string;
    photoUrl: string;
    // Until now, these are for,  UserForListDto. Optional parameter for UserForDetailedDto.
    introduction?: string;
    interests?: string;
    lookingFor?: string;
    photos?: Photo[];
}
