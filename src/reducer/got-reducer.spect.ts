import { gotReducer } from './got-reducer';
import * as action from './action-creator';
import { gotModel } from '../models/got-model';

describe('Given gotreducer', () => {
    const mockedArray: Array<gotModel> = [
        {
            id: 1,
            name: '',
            isDead: false,
            family: '',
        },
    ];

    describe('When calling it with load action with an array got', () => {
        test('Then it should return a new state with the action payload', () => {
            //Arrange
            const initialState: gotModel[] = [];
            const actionForTest = action.loadGotAction(mockedArray);
            //Act

            const newState = gotReducer(initialState, actionForTest);
            //Assert
            expect(newState).toEqual(mockedArray);
            expect(newState).toHaveLength(1);
        });
    });
    describe('When calling it with add action with an array got', () => {
        test('It should return a new state with the characeter added', () => {
            const initialState: gotModel[] = [mockedArray[0]];
            const AddCharacter = { ...mockedArray[0], name: 'pepe', id: 5 };
            const actionForTest = action.addGotAction(AddCharacter);
            // Act

            const newState = gotReducer(initialState, actionForTest);
            //Asse
            expect(newState).toHaveLength(2);
        });
    });
    describe('When calling it with update action an array got', () => {
        test('It should return a new state with the character updated', () => {
            //Arrange
            const initialState: gotModel[] = [mockedArray[0]];
            const updateCharacter = { ...mockedArray[0], name: 'pepe' };
            const actionForTest = action.updateGotAction(updateCharacter);
            // Act

            const newState = gotReducer(initialState, actionForTest);
            //Asse
            expect(newState).toHaveLength(1);
            expect(newState).toEqual([updateCharacter]);
        });
    });
    describe('When calling it with delete action', () => {
        test('It should load the mocked array of gots without the deleted one', () => {
            const initialState: gotModel[] = [mockedArray[0]];
            const deleteCharacter = { ...mockedArray[0], id: 1 };
            const actionForTest = action.deleteGotAction(deleteCharacter);
            // Act

            const newState = gotReducer(initialState, actionForTest);
            //Asse
            expect(newState).toHaveLength(0);
        });
    });
});
