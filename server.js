let newFolderNameCounter = 1

const newFolderName = function (folders) {
  for (let i = 0; i < folders.length; i++) {
    newFolderNameCounter++
  }
  return 'New Folder ' + '(' + newFolderNameCounter + ')'
}
// console.log(newFolderName(['New Folder']))
// console.log(newFolderName(['New Folder', 'New Folder (2)']))
console.log(newFolderName(['New Folder', 'New Folder (2)', 'New Folder (3)']))
