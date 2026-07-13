package operation_setting

import (
	"testing"

	"github.com/stretchr/testify/require"
)

func TestDefaultChannelAffinityRetryPolicy(t *testing.T) {
	setting := GetChannelAffinitySetting()
	require.NotNil(t, setting)

	rulesByName := make(map[string]ChannelAffinityRule, len(setting.Rules))
	for _, rule := range setting.Rules {
		rulesByName[rule.Name] = rule
	}

	codexRule, ok := rulesByName["codex cli trace"]
	require.True(t, ok)
	require.False(t, codexRule.SkipRetryOnFailure)

	claudeRule, ok := rulesByName["claude cli trace"]
	require.True(t, ok)
	require.True(t, claudeRule.SkipRetryOnFailure)
}
