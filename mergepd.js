const mergepdfs = async (p1) => {
  const { default: PDFMerger } = await import('pdf-merger-js');
  
  var merger = new PDFMerger();
  // console.log(p1)
  // const q = []
  for (i of p1){
    console.log(i)
    await merger.add(i);
  }
  // await merger.add("1.pdf");
  // await merger.add("2.pdf");

  let d = new Date().getTime()
  await merger.save(`public/${d}.pdf`);

  return d
}

module.exports = { mergepdfs };
