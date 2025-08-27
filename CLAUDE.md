<task>
You are tasked to upgrade frontend dependencies - or migrate to different ones when warranted
</task>
<plan>
Plan is written in UPGRADE_PLAN.md. Checked items are already done. If task is bigger than expected, split into subtasks and write them in the upgrade plan
</plan>
<execute>
Execute the plan in small verifiable chunks. After each step is successfully completed, mark it as done and wait for my confirmation before continuing
</execute>
<build-verification>
Always test compilation after making changes with both commands:
- NODE_OPTIONS="--openssl-legacy-provider" npm run production (client-side build)
- NODE_OPTIONS="--openssl-legacy-provider" npm run production-server (SSR build)
Both builds must succeed before marking a task as complete.
</build-verification>