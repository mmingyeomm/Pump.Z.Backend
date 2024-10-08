import { Field, SmartContract, state, State, method, CircuitString, UInt64 } from 'o1js';

/**
 * Basic Example
 * See https://docs.minaprotocol.com/zkapps for more info.
 *
 * The Add contract initializes the state variable 'num' to be a Field(1) value by default when deployed.
 * When the 'update' method is called, the Add contract adds Field(2) to its 'num' contract state.
 *
 * This file is safe to delete and replace with your own contract.
 */
export class Add3 extends SmartContract {
  @state(Field) name = State<Field>();
  @state(Field) name2 = State<Field>();
  @state(Field) name3 = State<Field>();
  @state(Field) name4 = State<Field>();
  @state(Field) name5 = State<Field>();

  init() {
    super.init();
    this.name.set(Field(1));
  }

  @method async update(name : Field) {
    const currentState = this.name.getAndRequireEquals();
    const newState = Field(name)

    this.name.set(newState);
  }
}