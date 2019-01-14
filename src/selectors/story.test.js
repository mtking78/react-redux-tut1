import { getReadableStories } from './story';

describe('story selector', () => {
  it('retrieves readable stories', () => {
    const storyState = {
      error: null,
      stories: [
        {objectID: '1', title: 'testObj1' },
        {objectID: '2', title: 'testObj2' },
      ],
    };
    const archiveState = ['1'];
    const state = { storyState, archiveState }

    const expectedReadableStories = [{ objectID: '2', title: 'testObj2' }];
    const readableStories = getReadableStories(state);

    expect(readableStories).toEqual(expectedReadableStories);;
  });
});