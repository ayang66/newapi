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
		if ratio != 1 {
			t.Fatalf("GetCompletionRatio(%q) = %v, want 1", model, ratio)
		}

		info := GetCompletionRatioInfo(model)
		if info.Ratio != 1 || !info.Locked {
			t.Fatalf("GetCompletionRatioInfo(%q) = %+v, want ratio 1 and locked", model, info)
		}
	}
}
