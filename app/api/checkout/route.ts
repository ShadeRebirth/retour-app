import { NextResponse ) from "next/ server";
import Stripe from "stripe";
const stripe = new
Stripe(process.env.STRIPE_SECRET_KEY!);
export async function POSTO {
const session = await
stripe.checkout.sessions.create(i
mode: "subscription", line_items: K price:
process.env.STRIPE_PRICE_ID!, quantity: 1
从
success_url: '$
{process.env.NEXT_PUBLIC_SITE_URL}/ succes? session_id={CHECKOUT_SESSION_ID;, cancel_url: '$
{process.env.NEXT_PUBLIC_SITE_URLY,
7);
return NextResponse.json({url:
session.url j;
｝
