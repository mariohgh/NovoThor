import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    const netsuiteResponse = await fetch(process.env.NETSUITE_RESTLET_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NETSUITE_TOKEN_SECRET}`,
      },
      body: JSON.stringify({
        name: body.name,
        email: body.email,
        phone: body.phone,
        message: body.message,
        type: body.type || 'inquiry',
      }),
    })

    if (!netsuiteResponse.ok) throw new Error('NetSuite submission failed')

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to submit form' }, { status: 500 })
  }
}
