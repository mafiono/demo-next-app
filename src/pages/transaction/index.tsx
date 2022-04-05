/* eslint-disable @next/next/no-img-element */
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import HeaderComponent from '../../components/HeaderComponent'
import axiosClient from '../../config/client'
import _ from 'lodash'
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
const method = {
  BANK: 'Bank',
  PULSA: 'Pulsa',
  EWALLET: 'Ewallet',
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
interface PaymentCardProps {
  disabled?: boolean
  active?: boolean
  accountNumber?: string
  accountOwnerName?: string
  adminFee?: number
  adminFeeType?: number
  code?: string
  imageUrl?: string
  maximumAmount?: number
  method?: string
  minimumAmount?: number
  nameDisplayPartial?: boolean
  nameIsDisplayed?: boolean
  numberIsDisplayed?: boolean
  numberIsDisplayedPartial?: boolean
  operatorPaymentAccountId?: string
  status?: number
}
const PaymentCard = (props: PaymentCardProps) => {
  return (
    <Link href=''>
      <a
        className={`rounded-[8px] ${
          props.active ? 'bg-primary' : 'bg-white'
        } hover:bg-primary gap-[0.2rem] flex items-center px-[5px] py-[10px] transition-all ${
          props.disabled ? 'pointer-events-none contrast-50' : ''
        }`}
      >
        <div
          className={`${
            !props.disabled ? 'bg-green-500' : 'bg-danger'
          } rounded-full h-[7px] aspect-square`}
        />
        <div className='relative h-0 overflow-hidden w-[62%] pb-[20%]'>
          <img
            alt={props.method}
            src={props.imageUrl}
            className='absolute top-0 bottom-0 left-0 right-0 w-full h-full'
          />
        </div>
      </a>
    </Link>
  )
}
const TransactionPage = () => {
  const router = useRouter()
  const [tabType, setTabType] = useState<any>('')
  const [listPayment, setListPayment] = useState<any[]>([])
  const { type } = router.query || {}
  useEffect(() => {
    setTabType(type || typeTransaction.DEPOSIT)
  }, [type])
  useEffect(() => {
    axiosClient
      .get('/operator/payment-account')
      .then(res => {
        const { operatorPaymentAccountList } = res.data
        const groupingData = _.chain(operatorPaymentAccountList)
          .groupBy('method')
          .map((value, key) => ({ method: key, data: value }))
          .value()
        setListPayment(groupingData)
      })
      .catch(e => {
        console.log(e)
      })
  }, [])

  return (
    <div>
      <HeaderComponent />

      <div className='relative w-full'>
        <div className='container mx-auto my-[1rem]'>
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
          <div className='w-full rounded-[8px] overflow-hidden grid gap-[2rem] bg-[#3A3D43]'>
            <div className='h-[62px] bg-primary flex items-center justify-center'>
              <p className='title-page text-white'>Choose Payment Method</p>
            </div>
            <div className='grid grid-cols-6 p-[1rem] md:divide-x'>
              <div className='p-[10px] col-span-full md:col-span-3'>
                <div className='grid gap-[1rem]'>
                  <div>
                    <h2 className='text-center label-card font-semibold text-white'>
                      Via bank
                    </h2>
                  </div>
                  <div className='grid grid-cols-3 gap-[1rem]'>
                    {listPayment
                      .find((e: any) => e.method === method.BANK)
                      ?.data.map((e: any, i: number) => {
                        return (
                          <PaymentCard
                            {...e}
                            disabled={i == 0}
                            key={i.toString()}
                          />
                        )
                      })}
                  </div>
                </div>
              </div>
              <div className='p-[10px] col-span-full md:col-span-2'>
                <div className='grid gap-[1rem]'>
                  <div>
                    <h2 className='text-center label-card font-semibold text-white'>
                      Via E-Wallet
                    </h2>
                  </div>
                  <div className='grid grid-cols-3 md:grid-cols-2 gap-[1rem] items-center'>
                    {listPayment
                      .find((e: any) => e.method === method.EWALLET)
                      ?.data.map((e: any, i: number) => {
                        return (
                          <PaymentCard
                            {...e}
                            disabled={i == 0}
                            key={i.toString()}
                          />
                        )
                      })}
                  </div>
                </div>
              </div>
              <div className='p-[10px] col-span-full md:col-span-1'>
                <div className='grid gap-[1rem]'>
                  <div>
                    <h2 className='text-center label-card font-semibold text-white'>
                      Via Phone Credit
                    </h2>
                  </div>
                  <div className='grid grid-cols-3 md:grid-cols-1 gap-[1rem]'>
                    {listPayment
                      .find((e: any) => e.method === method.PULSA)
                      ?.data.map((e: any, i: number) => {
                        return (
                          <PaymentCard
                            {...e}
                            disabled={i == 0}
                            key={i.toString()}
                          />
                        )
                      })}
                  </div>
                </div>
              </div>
            </div>
            <div className='grid col-span-full md:grid-cols-6 p-[1rem]'>
              <div className='md:col-[3/5]'>
                <Link href='/transaction/deposit'>
                  <a className='btn --lg --primary w-full'>Submit</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransactionPage

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
