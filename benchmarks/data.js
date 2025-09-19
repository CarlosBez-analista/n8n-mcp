window.BENCHMARK_DATA = {
  "lastUpdate": 1758241375808,
  "repoUrl": "https://github.com/CarlosBez-analista/n8n-mcp",
  "entries": {
    "n8n-mcp Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "baab3a02dc68c5d81e33f93bce0e5462d65a52d1",
          "message": "Merge pull request #139 from czlonkowski/feature/validation-improvements\n\nchore: update n8n to v1.106.3 and bump version to 2.10.4",
          "timestamp": "2025-08-12T08:57:47+02:00",
          "tree_id": "eb0e009eb0f4f9b2b57fab8bd3ab6b4442e72ccc",
          "url": "https://github.com/CarlosBez-analista/n8n-mcp/commit/baab3a02dc68c5d81e33f93bce0e5462d65a52d1"
        },
        "date": 1755200521341,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0189,
            "unit": "ms",
            "range": 0.2491,
            "extra": "53017 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.126,
            "unit": "ms",
            "range": 0.4940000000000002,
            "extra": "320 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0046,
            "unit": "ms",
            "range": 0.26380000000000003,
            "extra": "216830 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.066,
            "unit": "ms",
            "range": 0.3518,
            "extra": "15147 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "70653b16bd66efebc193c9fd1846b151166fe555",
          "message": "Merge pull request #201 from czlonkowski/fix/update-partial-workflow-operation\n\nSummary\nFixed critical bug in n8n_update_partial_workflow where operations were using wrong property name\nChanged from changes to updates for consistency with operation naming\nResolves issues where AI agents had to fall back to expensive full workflow updates\nFixes\nResolves update_partial_workflow is invalid #159 - update_partial_workflow is invalid\nResolves Partial Workflow Update returns error #168 - Partial Workflow Update returns error\nChanges Made\nUpdated UpdateNodeOperation interface to use updates instead of changes\nUpdated UpdateConnectionOperation for consistency\nFixed implementation in workflow-diff-engine.ts\nUpdated Zod schema validation in handlers-workflow-diff.ts\nFixed documentation and examples\nUpdated all tests to use new property name\nTest Plan\n Build passes (npm run build)\n Tests pass for workflow-diff-engine\n Manually tested with real workflow - updates work correctly\n Verified connections are preserved after updates\nBefore & After\nBefore: {type: \"updateNode\", nodeId: \"123\", changes: {...}} ❌ Failed\nAfter: {type: \"updateNode\", nodeId: \"123\", updates: {...}} ✅ Works",
          "timestamp": "2025-09-17T23:52:56+02:00",
          "tree_id": "460b51c28e58cc0ba65afcb19706612ea7a44fa8",
          "url": "https://github.com/CarlosBez-analista/n8n-mcp/commit/70653b16bd66efebc193c9fd1846b151166fe555"
        },
        "date": 1758241375084,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.021,
            "range": "0.3246",
            "unit": "ms",
            "extra": "47606 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.1851,
            "range": "0.5312999999999999",
            "unit": "ms",
            "extra": "314 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0049,
            "range": "0.2705",
            "unit": "ms",
            "extra": "203936 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0661,
            "range": "0.306",
            "unit": "ms",
            "extra": "15124 ops/sec"
          }
        ]
      }
    ]
  }
}