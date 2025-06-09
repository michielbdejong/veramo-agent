import { expect, test} from 'vitest';
import { BaseCredential } from '../../../dist/credentials/BaseCredential.js';
import { Issuer } from '../../../dist/issuer/Issuer.js';

test('BaseCredential constructor', async () => {
    const credential = new BaseCredential(new Issuer({}, {}), '');
    expect(credential).toEqual({
      "automaticallyBindHolder": true,
      "credentialId": "",
      "issuer": {},
    });
});