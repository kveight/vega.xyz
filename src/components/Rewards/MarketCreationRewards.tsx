import React from 'react'
import RewardBox from './RewardBox'
import useRewardsMarketCreation from '../../hooks/use-rewards-market-creation'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'
import NetworkParameter from '../NetworkParameter'

const MarketCreationRewards = () => {
  const { t } = useTranslation('component.rewards')
  const { rewards, loading, error } = useRewardsMarketCreation()

  return (
    <>
      {rewards !== null && (
        <RewardBox
          title={t('Market Creation')}
          rewardValue={rewards}
          rewardValueQualifier={t('Cumulative total paid out in last 30 days')}
          description={
            <div className="text-[0.875rem] text-vega-mid-grey">
              <Trans t={t}>
                Bonus paid to the proposer of any market that reaches a
                cumulative volume of approx{' '}
                <NetworkParameter
                  param="rewards_marketCreationQuantumMultiple"
                  prettyNumber={true}
                />{' '}
                USD equivalent
              </Trans>
            </div>
          }
          buttonText={t('Create Markets')}
          buttonLink="/market-creation/"
        />
      )}
    </>
  )
}

export default MarketCreationRewards
