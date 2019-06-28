import {ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT} from './actionTypes'
import uuid from uuid;

const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

{
    type: REMOVE_COMMENT,
    id: 20 // przykładowy id komentarza do usunięcia
}

{
    type: EDIT_COMMENT,
    id: 20,
    text: 'wyedytowany tekst komentarza'
}