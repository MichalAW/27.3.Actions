import {ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT} from './actionTypes'
import uuid from uuid;

export function addComment(text) {
    return {
        type: ADD_COMMENT,
        text: text,
        id: uuid.v4()
    }
}

export function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id: id
    }
}

export function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        text: text,
        id: id
    }
}

export function thumbUpComment(id, text) {
    return {
        type: EDIT_COMMENT,
        text: text,
        id: id
    }
}

export function thumbDownComment(id, text) {
    return {
        type: EDIT_COMMENT,
        text: text,
        id: id
    }
}
