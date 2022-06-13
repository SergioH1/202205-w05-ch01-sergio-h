import { gotReducer } from './got-reducer';
import * as actions from './action-creator';
import { gotModel } from '../models/got-model';

const mockedArray: Array<gotModel> = [
    {
        id: 0,
        name: '',
        isDead: false,

        family: '',
    },
    {
        id: 1,
        name: '',
        isDead: true,

        family: '',
    },
];
describe('Given gots reducer', () => {
    describe('When calling it with load action', () => {
        test('It should load the mocked array of gots', () => {
            const newState = gotReducer([], actions.loadGotAction(mockedArray));
            expect(newState).toEqual(mockedArray);
        });
    });
    describe('When calling it with add action', () => {
        test('It should return an array with the mocked got', () => {
            const newState = gotReducer(
                [],
                actions.addGotAction(mockedArray[0])
            );
            expect(newState).toEqual([mockedArray[0]]);
        });
    });
    describe('When calling it with update action', () => {
        test('It should load the mocked array of gots', () => {
            const mockedName = 'test 1';
            const newState = gotReducer(
                mockedArray,
                actions.updateGotAction({
                    ...mockedArray[0],
                    name: mockedName,
                })
            );
            expect(newState.find((item) => item.id === 0)!.name).toEqual(
                mockedName
            );
        });
    });
    describe('When calling it with delete action', () => {
        test('It should load the mocked array of gots without the deleted one', () => {
            const newState = gotReducer(
                mockedArray,
                actions.deleteGotAction(mockedArray[0])
            );
            expect(newState).toEqual([mockedArray[1]]);
        });
    });
});
