import ContentWrapper from '../ContentWrapper'

const Error = ({ message }: { message: string }) => {
  return (
    <ContentWrapper>
      <p className='text-red'>{message}</p>
    </ContentWrapper>
  )
}

export default Error
