let newFolderNameCounter = 1

const newFolderName = function (folders) {
  for (let i = 0; i < folders.length; i++) {
    console.log(folders[i])
    newFolderNameCounter++
  }
  return 'New Folder ' + '(' + newFolderNameCounter + ')'
}
console.log(newFolderName(['New Folder']))
