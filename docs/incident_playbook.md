### Backup & Recovery

- GitHub serves as version control and backup. Any lost file can be recovered via commit history.  
To take a backup:
```bash
git clone https://github.com/punsarawickramarathna/invoice-generator-saas.git

- UptimeRobot monitors our production GitHub Pages site.
- In case of issues:
  1. Check UptimeRobot dashboard
  2. Review recent commits
  3. Revert to last stable version
  4. Redeploy via GitHub Pages

##  Restore Process

###  Step 1: Identify a Stable Commit

Run:

```bash
git log
```

Find and copy the hash of a known working commit (e.g., `c2eb62c3152523e2986270ecb2d9b53a89368a5e`).

---

###  Step 2: Test the Commit Locally

Check it out:

```bash
git checkout c2eb62c3152523e2986270ecb2d9b53a89368a5e
```

Verify that our app works as expected.

---

### Step 3: If This Version Works Fine

#### Create a Recovery Branch

```bash
git checkout -b fix/rollback-stable
git push origin fix/rollback-stable
```

> This preserves the working state for future reference or deployment.

---

### Promote Stable Version to Production

```bash
git checkout main
git merge fix/rollback-stable
git push origin main
```

> This updates GitHub Pages (production) with the stable version.

---

##  Uptime Monitoring

**Tool**: [UptimeRobot](https://uptimerobot.com)

- **URL Monitored**: `https://punsarawickramarathna.github.io/invoice-generator-saas/`
- **Interval**: Every 5 minutes
- **Notification**: Email alert on downtime

---

## Best Practices

- Work in feature/staging branches
- Test thoroughly before merging to `main`
- Keep UptimeRobot active for continuous monitoring

---

## Assignment Notes

This incident response process shows:

- Real rollback and restore using Git
- Safe branching workflow
- Live deployment monitoring with alerting
