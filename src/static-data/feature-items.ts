import { FeatureItem, TimelineDisplaySide } from '@/types/FeatureItem'
import { faMoneyBill, faWallet } from '@fortawesome/free-solid-svg-icons'

const trackSpendingsFeature = FeatureItem.builder('Track your expenses easily', 'v1.0.0')
  .implemented(true)
  .icon(faMoneyBill)
  .description('Add income and expense entries, set up budgets and more.')
  .build()

const multipleWalletsFeature = FeatureItem.builder('Track multiple wallets and accounts', 'next')
  .implemented(false)
  .icon(faWallet)
  .description('Add multiple wallets and track your money wherevere they are.')
  .build()

export const featureItems = [trackSpendingsFeature, multipleWalletsFeature]
