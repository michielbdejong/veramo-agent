import { expect, test} from 'vitest';
import { OpenBadgeCredential } from '../OpenBadgeCredential';

test('generate OpenBadgeCredential', async () => {
    const credential = new OpenBadgeCredential({}, '');
    const result = await credential.generate({});

    expect(credential).toEqual({});
    expect(result).toEqual({});
});