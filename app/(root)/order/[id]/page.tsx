import { Metadata } from 'next';
import { getOrderById } from '@/lib/actions/order.actions';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Order Details',
};

async function OrderDetailsPage(props: { params: { id: string } }) {
  const { id } = await props.params;

  const order = await getOrderById(id);
  if (!order) notFound();

  return <>OrderDetailsPage {order.totalPrice}</>;
}

export default OrderDetailsPage;
