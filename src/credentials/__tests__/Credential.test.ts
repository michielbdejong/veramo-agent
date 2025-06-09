import { expect, test} from 'vitest';
import { Credential } from '../Credential';
import { credentialResolver } from '../credentialResolver';

test('Credential class', async () => {
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

test('credentialResolver', async () => {
  const issuer = {};
  const proofData = {};
  const credential = await credentialResolver(issuer, proofData);
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