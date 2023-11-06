```
> node .\script.js
FETCHING
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
{ data: null }
ALL PROMS 100
{
  counters: [
    {
      key: 'prisma_client_queries_total',
      labels: {},
      value: 100,
      description: 'The total number of Prisma Client queries executed'
    },
    {
      key: 'prisma_datasource_queries_total',
      labels: {},
      value: 100,
      description: 'The total number of datasource queries executed'
    },
    {
      key: 'prisma_pool_connections_closed_total',
      labels: {},
      value: 0,
      description: 'The total number of pool connections closed'
    },
    {
      key: 'prisma_pool_connections_opened_total',
      labels: {},
      value: 10,
      description: 'The total number of pool connections opened'
    }
  ],
  gauges: [
    {
      key: 'prisma_client_queries_active',
      labels: {},
      value: 0,
      description: 'The number of currently active Prisma Client queries'
    },
    {
      key: 'prisma_client_queries_wait',
      labels: {},
      value: 0,
      description: 'The number of datasource queries currently waiting for an free connection'
    },
    {
      key: 'prisma_pool_connections_busy',
      labels: {},
      value: 0,
      description: 'The number of pool connections currently executing datasource queries'
    },
    {
      key: 'prisma_pool_connections_idle',
      labels: {},
      value: 10,
      description: 'The number of pool connections that are not busy running a query'
    },
    {
      key: 'prisma_pool_connections_open',
      labels: {},
      value: 10,
      description: 'The number of pool connections currently open'
    }
  ],
  histograms: [
    {
      key: 'prisma_client_queries_duration_histogram_ms',
      labels: {},
      value: [Object],
      description: 'The distribution of the time Prisma Client queries took to run end to end'
    },
    {
      key: 'prisma_client_queries_wait_histogram_ms',
      labels: {},
      value: [Object],
      description: 'The distribution of the time all datasource queries spent waiting for a free connection'
    },
    {
      key: 'prisma_datasource_queries_duration_histogram_ms',
      labels: {},
      value: [Object],
      description: 'The distribution of the time datasource queries took to run'
    }
  ]
}
```