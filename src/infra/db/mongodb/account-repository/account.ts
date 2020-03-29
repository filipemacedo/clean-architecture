import { AddAccountRepository } from '../../../../data/protocols/add-account-repository'
import { AddAccountModel } from '../../../../domain/usecasess/add-account'
import { AccountModel } from '../../../../domain/models/account'
import { MongoHelper } from '../helpers/mongo-helper'

export class AccountMongoRepository implements AddAccountRepository {
  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = MongoHelper.getCollection('accounts')

    const resultOperation = await accountCollection.insertOne(accountData)

    const [account] = resultOperation.ops

    const { _id, ...accountProps } = account

    return {
      ...accountProps,
      id: _id
    }
  }
}
