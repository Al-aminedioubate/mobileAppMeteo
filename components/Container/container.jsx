export function Container({children}){
    return <ImageBackground
    source={backgroundImg}
    style={s.Img_background}
    imageStyle={s.img}
  >
    <SafeAreaProvider>
    <SafeAreaView style={s.container}>{children}</SafeAreaView>
    </SafeAreaProvider>
    </ImageBackground>




}