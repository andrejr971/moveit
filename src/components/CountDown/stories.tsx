import { Story, Meta } from '@storybook/react/types-6-0'
import CountDown from '.'

export default {
  title: 'CountDown',
  component: CountDown
} as Meta

export const Default: Story = () => <CountDown />
