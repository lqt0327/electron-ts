interface QuickLinkData {
  [key: string]: {
    [key: string]: QuickLinkDataItem
  }
}

interface QuickLinkDataItem {
  id: string;
  title: string;
  img: string;
  factory: string;
  createTime: number;
  banner: string;
  about: string;
  startLink: string;
}

interface FileMessage {
  path: string,
  cTime: Date,
  mTime: Date
}

declare namespace ResponseParam {
  interface status {
    code: number;
    message?: string;
  }
  
  interface getQuickLinkData {
    status: status,
    result: QuickLinkData,
  }

  interface getOneFileMessage {
    status: status;
    result?: {
      path: string,
      cTime: Date,
      mTime: Date
    }
  }

  interface getMoreFileMessage {
    status: status;
    result?: Array<FileMessage>
  }
}

