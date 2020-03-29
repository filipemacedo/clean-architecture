import { AddAccountModel } from '../../domain/usecasess/add-account'
import { AccountModel } from '../../domain/models/account'

export interface AddAccountRepository {
  add (account: AddAccountModel): Promise<AccountModel>
}
