import { expect, test} from 'vitest';
import { Credential } from '../Credential';

test('generate Credential', async () => {
  const credential = new Credential();
  expect(credential).toEqual({
   "automaticallyBindHolder": true,
   "configuration": undefined,
   "contexts": [],
   "credential": undefined,
   "data": {},
   "dictionary": {},
   "holder": undefined,
   "id": undefined,
   "issuer": undefined,
   "metaData": {},
   "output": undefined,
   "principalId": undefined,
   "type": "GenericCredential",
  });
});