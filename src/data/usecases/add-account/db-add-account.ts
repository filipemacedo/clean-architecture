import {
  AddAccountRepository,
  AddAccount,
  AddAccountModel,
  AccountModel,
  Encrypter
} from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
  constructor (
    private readonly encrypter: Encrypter,
    private readonly addAccountRepository: AddAccountRepository) {

  }

  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const encryptPassword = await this.encrypter.encrypt(accountData.password)

    return this.addAccountRepository.add({ ...accountData, password: encryptPassword })
  }
}
