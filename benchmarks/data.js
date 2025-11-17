window.BENCHMARK_DATA = {
  "lastUpdate": 1763386284402,
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
          "id": "dd36735a1a6ba3b1a822ed7a7a8638b3fcf0f4cb",
          "message": "Merge pull request #215 from czlonkowski/chore/update-n8n-dependencies-v1.112.3\n\nchore: update n8n dependencies to v1.112.3",
          "timestamp": "2025-09-22T23:58:05+02:00",
          "tree_id": "8e926b26c9cafca61638ebf8f7ca5a7f9610b248",
          "url": "https://github.com/CarlosBez-analista/n8n-mcp/commit/dd36735a1a6ba3b1a822ed7a7a8638b3fcf0f4cb"
        },
        "date": 1758584199811,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0209,
            "range": "0.413",
            "unit": "ms",
            "extra": "47807 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.1931,
            "range": "0.5091000000000001",
            "unit": "ms",
            "extra": "313 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0049,
            "range": "0.2816",
            "unit": "ms",
            "extra": "204745 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0665,
            "range": "0.3146",
            "unit": "ms",
            "extra": "15041 ops/sec"
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
          "id": "c23442249a7fc5cd18cf017b8ecd7dc5fc52e457",
          "message": "Merge pull request #223 from czlonkowski/feat/improve-update-partial-workflow\n\nfeat: Remove unnecessary 5-operation limit from n8n_update_partial_workflow",
          "timestamp": "2025-09-24T16:07:01+02:00",
          "tree_id": "8ad2329c3f5586841669773de692ed3b0c00fae4",
          "url": "https://github.com/CarlosBez-analista/n8n-mcp/commit/c23442249a7fc5cd18cf017b8ecd7dc5fc52e457"
        },
        "date": 1758742667148,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0193,
            "range": "0.25479999999999997",
            "unit": "ms",
            "extra": "51684 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.1741,
            "range": "0.6764000000000001",
            "unit": "ms",
            "extra": "315 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0048,
            "range": "0.2716",
            "unit": "ms",
            "extra": "206211 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0691,
            "range": "0.4586",
            "unit": "ms",
            "extra": "14480 ops/sec"
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
          "id": "3f427f952836fd35cb6d054a45d179d88b9cb37b",
          "message": "Update n8n to 1.117.2 (#379)",
          "timestamp": "2025-10-28T08:55:20+01:00",
          "tree_id": "19b592c4b1b26554b72fb4d46e5c2c87afac7aea",
          "url": "https://github.com/CarlosBez-analista/n8n-mcp/commit/3f427f952836fd35cb6d054a45d179d88b9cb37b"
        },
        "date": 1761752488606,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
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
          "id": "1bbfaabbc20f4989d81bc8a2cfc9f16795134ed8",
          "message": "fix: add structural hash tracking for workflow mutations (#422)\n\n* feat: add structural hashes and success tracking for workflow mutations\n\nEnables cross-referencing workflow_mutations with telemetry_workflows by adding structural hashes (nodeTypes + connections) alongside existing full hashes.\n\n**Database Changes:**\n- Added workflow_structure_hash_before/after columns\n- Added is_truly_successful computed column\n- Created 3 analytics views: successful_mutations, mutation_training_data, mutations_with_workflow_quality\n- Created 2 helper functions: get_mutation_success_rate_by_intent(), get_mutation_crossref_stats()\n\n**Code Changes:**\n- Updated mutation-tracker.ts to generate both hash types\n- Updated mutation-types.ts with new fields\n- Auto-converts to snake_case via existing toSnakeCase() function\n\n**Testing:**\n- Added 5 new unit tests for structural hash generation\n- All 17 tests passing\n\n**Tooling:**\n- Created backfill script to populate hashes for existing 1,499 mutations\n- Created comprehensive documentation (STRUCTURAL_HASHES.md)\n\n**Impact:**\n- Before: 0% cross-reference match rate\n- After: Expected 60-70% match rate (post-backfill)\n- Unlocks quality impact analysis, training data curation, and mutation pattern insights\n\nConceived by Romuald Członkowski - www.aiadvisors.pl/en\n\n* fix: correct test operation types for structural hash tests\n\nFixed TypeScript errors in mutation-tracker tests by adding required\n'updates' parameter to updateNode operations. Used 'as any' for test\noperations to maintain backward compatibility while tests are updated.\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n* chore: remove documentation files from tracking\n\nRemoved internal documentation files from version control:\n- Telemetry implementation docs\n- Implementation roadmap\n- Disabled tools analysis docs\n\nThese files are for internal reference only.\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n* chore: remove telemetry documentation files from tracking\n\nRemoved all telemetry analysis and documentation files from root directory.\nThese files are for internal reference only and should not be in version control.\n\nFiles removed:\n- TELEMETRY_ANALYSIS*.md\n- TELEMETRY_MUTATION_SPEC.md\n- TELEMETRY_*_DATASET.md\n- VALIDATION_ANALYSIS*.md\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n* chore: bump version to 2.22.18 and update CHANGELOG\n\nVersion 2.22.18 adds structural hash tracking for workflow mutations,\nenabling cross-referencing with workflow quality data and automated\nsuccess detection.\n\nKey changes:\n- Added workflowStructureHashBefore/After fields\n- Added isTrulySuccessful computed field\n- Enhanced mutation tracking with structural hashes\n- All tests passing (17/17)\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n* chore: remove migration and documentation files from PR\n\nRemoved internal database migration files and documentation from\nversion control:\n- docs/migrations/\n- docs/telemetry/\n\nUpdated CHANGELOG to remove database migration references.\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en",
          "timestamp": "2025-11-14T13:57:54+01:00",
          "tree_id": "7e4b59726deadbda59817c8cc790bc76dc07fdc0",
          "url": "https://github.com/CarlosBez-analista/n8n-mcp/commit/1bbfaabbc20f4989d81bc8a2cfc9f16795134ed8"
        },
        "date": 1763386283815,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      }
    ]
  }
}