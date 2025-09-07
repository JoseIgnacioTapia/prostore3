import { Metadata } from 'next';
import { getOrderById } from '@/lib/actions/order.actions';
import { notFound } from 'next/navigation';
import OrderDetailsTable from './OrderDetailsTable';
import { ShippingAddress } from '@/types/index';
import { auth } from '@/auth';

export const metadata: Metadata = {
  title: 'Order Details',
};

async function OrderDetailsPage(props: { params: { id: string } }) {
  const { id } = await props.params;

  const order = await getOrderById(id);
  if (!order) notFound();

  const session = await auth();

  return (
    <OrderDetailsTable
      order={{
        ...order,
        shippingAddress: order.shippingAddress as ShippingAddress,
      }}
      paypalClientId={process.env.PAYPAL_CLIENT_ID || 'sb'}
      isAdmin={session?.user?.role === 'admin' || false}
    />
  );
}

export default OrderDetailsPage;
