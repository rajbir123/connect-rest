let url = require('url')

const Q = url.parse('http://localhost:9100/sys/login#access_token=mn1nvg4rEhc_r-5tIQfHXjmipR3QYcTz&expires_in=7200&token_type=Bearer&state=RjQOql9f7wpK5H3FEDbMrP9f0eprCepB&id_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlF6TkNPVVkxTmpoRFJEUTVPVGt5UmtGRFJETkVOekpDUkRReVFURkNORFJGTVRnelFUVkZSQSJ9.eyJpc3MiOiJodHRwczovL3R1ZHZhcmkuZXUuYXV0aDAuY29tLyIsInN1YiI6ImF1dGgwfDVhNzBmY2I5OTQwNTlmNWU3NTI3ZDljYSIsImF1ZCI6ImNIME52anB0a0RIemY5dkx6am9PaUprQzREVUc5Qk5sIiwiaWF0IjoxNTE3Mzg4NDY3LCJleHAiOjE1MTc0MjQ0NjcsImF0X2hhc2giOiJfZGhQeGVVZUlzNERaZGtsaXpFREZRIiwibm9uY2UiOiJSLklLdkFzcHJ0TEFhcExBVEhOZ29scEs2SjQyeGVvUyJ9.fLOUeZQfHUdAW7EOStmStLfbWYeXsr7-aZ-dkWnapRfoMsCRjnYVuU2aI1t1GrzDLvpw5TtWUJp6jnymR6aaF1gHux1IeyNwscSF7VhDmiSgAYVa8N41dXIKz2gQzAjQgKlS9ZQXSoaNHmS8hSJiHly5axhu0088Y7HyfVwUMHoCmGKxWGZoY7IFAIdEZL3i0sjN33OvKeyomZ46ZTjcanJx2i9xvvvgiOcEU7tqONDYwra2ONZR-uVpuASQDj7jFISLVhGnpLWd00GuxS_ElAr5fbe7dVeAVgnTyHCssFtVU21A8V0YJjr1KQHw91YVURHxNr0eSeHZPpCy4JFNdw')
console.log('------', Q)

let q = url.parse( 'http://localhost?' + Q.hash.substring(1)).query
console.log('?????', q, Object.keys(q) )
