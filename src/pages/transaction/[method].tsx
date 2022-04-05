/* eslint-disable @next/next/no-img-element */
import { Modal } from '@mui/material'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import HeaderComponent from '../../components/HeaderComponent'
import BaseInputSelect from '../../partials/input/BaseInputSelect'
import BaseInputText from '../../partials/input/BaseInputText'
import BaseInputTextArea from '../../partials/input/BaseInputTextArea'

interface ButtonHeaderProps {
  label: string
  active?: boolean
  href: string
}
const typeTransaction = {
  DEPOSIT: 'deposit',
  WITHDRAWAL: 'withdrawal',
  LAST_5_TRX: 'last_5_trx',
  GAME_HISTORY: 'game_history',
  BALANCE_HISTORY: 'balance_history',
}
const ButtonHeader = (props: ButtonHeaderProps) => {
  return (
    <Link href={props.href}>
      <a
        className={`px-[2.5rem] py-[0.2rem] border-b-2 ${
          props.active ? 'border-danger text-danger' : 'border-white text-white'
        }`}
      >
        <span className=' whitespace-nowrap'>{props.label}</span>
      </a>
    </Link>
  )
}
function MethodPayment(props: any) {
  const [showWarningText, setShowWarningText] = useState<boolean>(false)
  const [tabType, setTabType] = useState<any>('')
  const [addNewAccount, setAddNewAccount] = useState(false)
  const router = useRouter()
  const { method, type } = router.query

  useEffect(() => {
    setTabType(type || typeTransaction.DEPOSIT)
  }, [type])

  const handleChangeForm = (e: any) => {}
  return (
    <div>
      <HeaderComponent />
      <div className='container mx-auto'>
        <div className='flex gap-[1rem] overflow-auto pb-[0.5rem] mb-[1rem]'>
          <ButtonHeader
            label='Deposit'
            href={`/transaction?type=${typeTransaction.DEPOSIT}`}
            active={tabType === typeTransaction.DEPOSIT}
          />
          <ButtonHeader
            label='Withdrawal'
            href={`/transaction?type=${typeTransaction.WITHDRAWAL}`}
            active={tabType === typeTransaction.WITHDRAWAL}
          />
          <ButtonHeader
            label='Last 5 Transaction'
            href={`/transaction?type=${typeTransaction.LAST_5_TRX}`}
            active={tabType === typeTransaction.LAST_5_TRX}
          />
          <ButtonHeader
            label='Game Transaction History'
            href={`/transaction?type=${typeTransaction.GAME_HISTORY}`}
            active={tabType === typeTransaction.GAME_HISTORY}
          />
          <ButtonHeader
            label='Balance Transaction History'
            href={`/transaction?type=${typeTransaction.BALANCE_HISTORY}`}
            active={tabType === typeTransaction.BALANCE_HISTORY}
          />
        </div>
        <div className='grid grid-cols-6 gap-[1rem] mt-[1rem]'>
          <div className='col-span-full md:col-span-4 bg-[#282A30] min-h-screen p-[1rem] md:px-[4rem] rounded-[8px]'>
            <div className=' grid gap-[1rem]'>
              <div className='flex items-center justify-center'>
                <div className=' p-[0.5rem] border-2 rounded-[8px] border-white flex items-center gap-[0.5rem]'>
                  <div>IMG BANK</div>
                  <div className='grid grid-cols-2'>
                    <div className=' text-white text-[9px] lg:text-[10px] mr-[0.5rem]'>
                      Minimum
                    </div>
                    <div>
                      <p className=' text-white text-[9px] lg:text-[10px]'>
                        : {new Intl.NumberFormat('id-ID').format(100000)}
                      </p>
                    </div>
                    <div className=' text-white text-[9px] lg:text-[10px] mr-[0.5rem]'>
                      Maximum
                    </div>
                    <div>
                      <p className=' text-white text-[9px] lg:text-[10px]'>
                        : {new Intl.NumberFormat('id-ID').format(100000)}
                      </p>
                    </div>
                    <div className=' text-white text-[9px] lg:text-[10px] mr-[0.5rem]'>
                      Fee
                    </div>
                    <div>
                      <p className=' text-white text-[9px] lg:text-[10px]'>
                        : {new Intl.NumberFormat('id-ID').format(100000)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <BaseInputText
                  type='number'
                  classInput=' border-primary'
                  name='amount'
                  id='amount'
                  placeholder='Amount'
                  onChange={handleChangeForm}
                  leftIcon={
                    <div>
                      <p className='text-primary font-semibold'>Rp </p>
                    </div>
                  }
                />
              </div>
              <h3 className='text-white font-semibold text-[11px] md:text-[16px] lg:text-[24px] text-center'>
                2. Choose or Input Withdrawal Amount
              </h3>
              <div className='grid grid-cols-3 gap-[1rem]'>
                {[10000, 50000, 100000, 500000, 1000000, 5000000].map(
                  (e, i) => {
                    return (
                      <div
                        className='border-2 py-[0.5rem] border-primary text-center justify-center flex items-center rounded-[8px] bg-white overflow-hidden'
                        key={i.toString()}
                      >
                        <p className='text-[12px] md:text-[12px] lg:text-[18px] text-primary font-semibold'>
                          {new Intl.NumberFormat('id-ID').format(e)}
                        </p>
                      </div>
                    )
                  },
                )}
              </div>
              <h4 className='text-white font-semibold text-[11px] md:text-[16px] lg:text-[20px] text-left'>
                Transfer Source :
              </h4>
              <div className='grid grid-cols-3 bg-[#0C0E14] rounded-[8px] divide-x-2'>
                <div className='p-[10px]'>
                  <p className=' text-white font-semibold text-center text-[8px] md:text-[14px] lg:text-[18px]'>
                    Bank Name :
                  </p>
                  <div className='h-[36.67px] flex items-center justify-center'>
                    <p className=' text-white text-center text-[8px] md:text-[12px] lg:text-[14px]'>
                      BCA
                    </p>
                  </div>
                </div>
                <div className='p-[10px]'>
                  <p className=' text-white font-semibold text-center text-[8px] md:text-[14px] lg:text-[18px]'>
                    Bank Acc Name :
                  </p>
                  <div className='h-[36.67px] flex items-center justify-center'>
                    <p className=' text-white text-center text-[8px] md:text-[12px] lg:text-[14px]'>
                      CANDRA EPRIATNA
                    </p>
                  </div>
                </div>
                <div className='p-[10px]'>
                  <p className=' text-white font-semibold text-center text-[8px] md:text-[14px] lg:text-[18px]'>
                    Acc. Number :
                  </p>
                  <div className='flex items-center justify-center gap-1'>
                    <p className=' text-white text-center text-[8px] md:text-[12px] lg:text-[14px]'>
                      5370267041
                    </p>
                    <button className='h-[36.67px] aspect-square rounded-[8px] hover:bg-accent flex items-center justify-center'>
                      <img
                        alt='copy-icon'
                        src='/assets/icons/copy-icon.svg'
                        className='h-[16px] aspect-square'
                      />
                    </button>
                  </div>
                </div>
              </div>
              <h4 className='text-white font-semibold text-[11px] md:text-[16px] lg:text-[20px] text-left'>
                Transfer Source :
              </h4>
              <div className='grid grid-cols-2 gap-[1rem]'>
                <BaseInputSelect
                  classInput='border-primary'
                  id='bank-account'
                  placeholder=''
                  onChange={() => {}}
                  name='bank-account'
                  data={[
                    {
                      label: '091293901',
                      value: '093892832',
                    },
                  ]}
                />
                <button
                  onClick={() => setAddNewAccount(true)}
                  className='btn --md --primary w-full'
                >
                  Add New Account
                </button>
              </div>
              <h4 className='text-white font-semibold text-[11px] md:text-[16px] lg:text-[20px] text-left'>
                Promotion Code :
              </h4>
              <div>
                <BaseInputSelect
                  classInput='border-primary'
                  id='bank-account'
                  placeholder=''
                  onChange={() => {}}
                  name='bank-account'
                  data={[
                    {
                      label: 'Promo code',
                      value: 'Promo code',
                    },
                  ]}
                />
              </div>
              <h4 className='text-white font-semibold text-[11px] md:text-[16px] lg:text-[20px] text-left'>
                Notes :
              </h4>
              <div>
                <BaseInputTextArea
                  classInput='border-primary'
                  id='bank-account'
                  placeholder=''
                  onChange={() => {}}
                  name='bank-account'
                />
              </div>
              <div>
                <div
                  className={`rounded-[8px] overflow-hidden bg-[#0C0E14] border-primary border-2 w-full px-3 flex flex-col py-2`}
                >
                  <button
                    onClick={() => setShowWarningText(!showWarningText)}
                    className='flex items-center justify-between'
                  >
                    <div className=' flex items-center justify-start gap-1'>
                      <img
                        src='/assets/icons/warning-icon.svg'
                        alt='warning'
                        className='h-[20px] aspect-square'
                      />
                      <p className='text-primary font-semibold'>Warning</p>
                    </div>
                    <button>
                      <img
                        src='/assets/icons/arrow.svg'
                        alt='arrow'
                        className={`h-[20px] aspect-square transition-all ${
                          showWarningText ? '' : 'rotate-[180deg]'
                        }`}
                      />
                    </button>
                  </button>
                  <div
                    className={`text-white transition-all pt-3 ${
                      showWarningText ? '' : 'hidden'
                    }`}
                  >
                    Elit commodo anim reprehenderit ullamco. Ad cupidatat non
                    proident aute. Do amet et deserunt nostrud minim ullamco
                    amet ut pariatur exercitation. Adipisicing dolor cillum
                    laboris commodo esse reprehenderit laboris mollit velit sit
                    reprehenderit enim nostrud. Qui cupidatat non exercitation
                    consectetur commodo dolore sit ut officia nulla enim
                    reprehenderit. Exercitation fugiat in cupidatat cupidatat in
                    enim enim labore culpa. Elit commodo anim reprehenderit
                    ullamco. Ad cupidatat non proident aute. Do amet et deserunt
                    nostrud minim ullamco amet ut pariatur exercitation.
                    Adipisicing dolor cillum laboris commodo esse reprehenderit
                    laboris mollit velit sit reprehenderit enim nostrud. Qui
                    cupidatat non exercitation consectetur commodo dolore sit ut
                    officia nulla enim reprehenderit. Exercitation fugiat in
                    cupidatat cupidatat in enim enim labore culpa.
                  </div>
                </div>
              </div>
              <div className='grid grid-cols-3'>
                <div className='col-[2/3]'>
                  <button className='btn --md --primary w-full'>Send</button>
                </div>
              </div>
            </div>
          </div>
          <div className='hidden md:block col-span-2'>
            <div className='grid gap-[1rem] grid-cols-2 items-start'>
              <div className='bg-[#282A30] rounded-[8px] aspect-square w-full'>
                <div className=' flex items-center justify-center flex-col gap-[0.5rem] h-full w-full'>
                  <img
                    alt='img-card'
                    className='md: h-[2rem] lg:h-[5rem] aspect-square'
                    src='/assets/icons/login-icon-v2.svg'
                    height='100'
                    width='100'
                  />
                  <p className='text-[15px] lg:text-[20px] text-white text-center font-semibold'>
                    Profile
                  </p>
                </div>
              </div>
              <div className='bg-[#282A30] rounded-[8px] aspect-square w-full'>
                <div className=' flex items-center justify-center flex-col gap-[0.5rem] h-full w-full'>
                  <img
                    alt='img-card'
                    className='md: h-[2rem] lg:h-[5rem] aspect-square'
                    src='/assets/icons/inbox-icon.svg'
                    height='100'
                    width='100'
                  />
                  <p className='text-[15px] lg:text-[20px] text-white text-center font-semibold'>
                    Inbox
                  </p>
                </div>
              </div>
              <div className='bg-[#282A30] rounded-[8px] aspect-square w-full'>
                <div className=' flex items-center justify-center flex-col gap-[0.5rem] h-full w-full'>
                  <img
                    alt='img-card'
                    className='md: h-[2rem] lg:h-[5rem] aspect-square'
                    src='/assets/icons/wallet-icon.svg'
                    height='100'
                    width='100'
                  />
                  <p className='text-[15px] lg:text-[20px] text-white text-center font-semibold'>
                    Transaction
                  </p>
                </div>
              </div>
              <div className='bg-[#282A30] rounded-[8px] aspect-square w-full'>
                <div className=' flex items-center justify-center flex-col gap-[0.5rem] h-full w-full'>
                  <img
                    alt='img-card'
                    className='md: h-[2rem] lg:h-[5rem] aspect-square'
                    src='/assets/icons/promotion-icon.svg'
                    height='100'
                    width='100'
                  />
                  <p className='text-[15px] lg:text-[20px] text-white text-center font-semibold'>
                    Promotion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={addNewAccount}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        onClose={() => setAddNewAccount(false)}
      >
        <div className='h-screen w-full flex items-center justify-center'>
          <div className='container grid grid-cols-4 p-2 md:p-0'>
            <div className='col-span-full md:col-[2/4] bg-[#282A30] rounded-[8px] overflow-hidden'>
              <div className='bg-primary p-[27px]'>
                <h2 className='lg:text-[32px] text-white text-center'>
                  Add New Account
                </h2>
              </div>
              <div className='p-5 grid grid-cols-2 gap-[1rem]'>
                <div className=''>
                  <p className='text-[15px] lg:text-[20px] text-white text-left font-semibold mb-[0.5rem]'>
                    Provider :
                  </p>
                  <BaseInputSelect
                    classInput='border-primary'
                    id='bank-account'
                    placeholder=''
                    onChange={() => {}}
                    name='bank-account'
                    data={[
                      {
                        label: 'BCA',
                        value: '093892832',
                      },
                    ]}
                  />
                </div>
                <div className=''>
                  <p className='text-[15px] lg:text-[20px] text-white text-left font-semibold mb-[0.5rem]'>
                    Account Number :
                  </p>
                  <BaseInputText
                    type='number'
                    classInput=' border-primary'
                    name='amount'
                    id='amount'
                    placeholder=''
                    onChange={handleChangeForm}
                  />
                </div>
                <div
                  onClick={() => setAddNewAccount(false)}
                  className=' col-span-full'
                >
                  <button className='w-full btn --lg --primary'>Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export const getServerSideProps = async (props: any) => {
  const translation = await serverSideTranslations(props.locale, [
    'title',
    'button',
  ])
  return {
    props: {
      ...translation,
    },
  }
}
export default MethodPayment
