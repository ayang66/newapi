package controller

import (
	"testing"

	"github.com/QuantumNous/new-api/common"
	"github.com/stretchr/testify/require"
)

func TestCalculateEpayQuotaFromActualMoneyCreditsByPaidRatio(t *testing.T) {
	originalQuotaPerUnit := common.QuotaPerUnit
	t.Cleanup(func() {
		common.QuotaPerUnit = originalQuotaPerUnit
	})
	common.QuotaPerUnit = 500000

	quotaToAdd, creditedAmount, actualMoney, err := calculateEpayQuotaFromActualMoney(10, 10, "1.00")
	require.NoError(t, err)
	require.Equal(t, 500000, quotaToAdd)
	require.Equal(t, "1", creditedAmount.String())
	require.Equal(t, "1", actualMoney.String())

	quotaToAdd, creditedAmount, actualMoney, err = calculateEpayQuotaFromActualMoney(10, 1, "0.50")
	require.NoError(t, err)
	require.Equal(t, 2500000, quotaToAdd)
	require.Equal(t, "5", creditedAmount.String())
	require.Equal(t, "0.5", actualMoney.String())
}

func TestCalculateEpayQuotaFromActualMoneyRejectsInvalidAmounts(t *testing.T) {
	_, _, _, err := calculateEpayQuotaFromActualMoney(10, 10, "not-a-number")
	require.Error(t, err)

	_, _, _, err = calculateEpayQuotaFromActualMoney(10, 10, "0")
	require.Error(t, err)

	_, _, _, err = calculateEpayQuotaFromActualMoney(10, 0, "1")
	require.Error(t, err)
}
