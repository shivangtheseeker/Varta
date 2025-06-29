import React from 'react'

function ChatMedia({
  information, setInformation
}) {
  return (
    <div className={`glassscreen ${information ? 'static' : 'hidden'}` }>
      ChatMedia
    </div>
  )
}

export default ChatMedia
