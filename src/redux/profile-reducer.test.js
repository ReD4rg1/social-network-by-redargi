import profileReducer, {addPost} from "./profile-reducer";

it('new post should be added', () => {
    let action = addPost();
    let newState = profileReducer({}, {});
});

