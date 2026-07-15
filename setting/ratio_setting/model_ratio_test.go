package ratio_setting

import "testing"

func TestGPT56CompletionRatio(t *testing.T) {
	models := []string{
		"gpt-5.6-sol",
		"gpt-5.6-luna",
		"gpt-5.6-terra",
	}

	for _, model := range models {
		ratio := GetCompletionRatio(model)
		if ratio != 6 {
			t.Fatalf("GetCompletionRatio(%q) = %v, want 6", model, ratio)
		}

		info := GetCompletionRatioInfo(model)
		if info.Ratio != 6 || !info.Locked {
			t.Fatalf("GetCompletionRatioInfo(%q) = %+v, want ratio 6 and locked", model, info)
		}
	}
}
