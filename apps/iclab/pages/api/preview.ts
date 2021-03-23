import { NextApiHandler } from 'next'

const preview: NextApiHandler = async (req, res) => {
  // const { token: ref, documentId } = req.query
  // const redirectUrl = await Client(req)
  //   .getPreviewResolver(ref as string, documentId as string)
  //   .resolve(linkResolver, '/')
  // if (redirectUrl) {
  //   res.setPreviewData({ ref })
  //   res.writeHead(302, { Location: `${redirectUrl}` })
  //   res.end()
  // } else {
  //   res.status(401).json({ message: 'Invalid token' })
  // }
}

export default preview
