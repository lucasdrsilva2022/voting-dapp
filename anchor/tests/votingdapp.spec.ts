import * as anchor from '@coral-xyz/anchor'
import {Program} from '@coral-xyz/anchor'
import {Keypair, PublicKey} from '@solana/web3.js'
import { BankrunProvider, startAnchor } from 'anchor-bankrun';

const IDL = require('../target/idl/votingdapp.json');

const votingAddress = new PublicKey("AsjZ3kWAUSQRNt2pZVeJkywhZ6gpLpHZmJjduPmKZDZZ");

describe('Voting', () => {
  it('Initialize Poll', async () => {
    const  context = await startAnchor("", [], []);
    const provider = new BankrunProvider(context);
  })
})
