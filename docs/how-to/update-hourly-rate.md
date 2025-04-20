# How-To: Update Hourly Rate Logic

## Objective
Change how hourly rates are calculated (e.g., apply tax).

## Example Change
Add 10% tax to the final total:

```javascript
const total = (hours * rate * 1.10).toFixed(2);
```

## Steps
1. Open `script.js`
2. Modify the total calculation as shown above
3. Save and commit changes
