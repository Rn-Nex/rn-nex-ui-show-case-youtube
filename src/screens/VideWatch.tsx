import React from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import YoutubePlayer from 'react-native-youtube-iframe';
import {
  Avatar,
  Box,
  Container,
  Divider,
  Image,
  Text,
  TextField,
  useTheme,
} from 'rn-nex-ui/src';
import {BaseStyles} from 'rn-nex-ui/src/libraries/style/styleTypes';

export const VideWatch: React.FC = () => {
  const {
    theme: {spacing, colors},
  } = useTheme();

  const chipButtonSx: BaseStyles = {
    d: 'flex',
    bg: colors.grey[100],
    r: 30,
    px: spacing.lg,
    py: 8,
    fDirection: 'row',
    items: 'center',
    content: 'center',
    gap: 10,
  };

  return (
    <Box>
      <YoutubePlayer play height={245} videoId={'xIYmkecymXk'} />
      <Container>
        <Box>
          <Text variation="h2" sx={{weight: '500'}}>
            Need for Speed™ Payback Chapter 1
          </Text>
        </Box>
        <Box
          sx={{mt: spacing.sm, d: 'flex', fDirection: 'row', gap: spacing.md}}>
          <Box>
            <Text color={colors.grey[700]} variation="h5">
              3 views
            </Text>
          </Box>
          <Box>
            <Text color={colors.grey[700]} variation="h5">
              3 hr ago
            </Text>
          </Box>
          <Box>
            <Text color={colors.grey[700]} variation="h5">
              #playstation...
            </Text>
          </Box>
        </Box>
        <Box
          sx={{
            d: 'flex',
            fDirection: 'row',
            mt: spacing.md,
            items: 'center',
            gap: spacing.md,
          }}>
          <Box>
            <Avatar
              source={{
                uri: 'https://yt3.googleusercontent.com/BGdBUaW8d09gMV3_MzryTEUoFP5NjuIB3zI7I5QDzI5fSVJSfZNChXGFEtEmQqJm4QMNiL3q2v4=s160-c-k-c0x00ffffff-no-rj',
              }}
              size={30}
              variation="rounded"
            />
          </Box>
          <Box>
            <Text>PS Games 3</Text>
          </Box>
        </Box>
        <Box sx={{mt: spacing.md, fDirection: 'row', gap: spacing.md}}>
          <Box sx={chipButtonSx}>
            <TouchableOpacity onPress={() => console.log('LIKE PRESSED')}>
              <Box sx={{d: 'flex', fDirection: 'row'}}>
                <Box sx={{pe: spacing.md}}>
                  <AntDesign name="like1" color={colors.grey[800]} />
                </Box>
                <Text variation="h6">1</Text>
              </Box>
            </TouchableOpacity>
            <Box>
              <Divider orientation="vertical" borderColor={colors.grey[400]} />
            </Box>
            <TouchableOpacity onPress={() => console.log('UNLIKE PRESSED')}>
              <Box>
                <AntDesign name="dislike1" color={colors.grey[800]} />
              </Box>
            </TouchableOpacity>
          </Box>
          <Box sx={chipButtonSx}>
            <Entypo name="share" color={colors.grey[800]} />
            <Text>Share</Text>
          </Box>
          <Box sx={chipButtonSx}>
            <Feather name="download" color={colors.grey[800]} />
            <Text>Download</Text>
          </Box>
        </Box>
        <Box sx={{mt: spacing.md}}>
          <Box sx={{bg: colors.grey[100], p: 10, r: 10}}>
            <Text>Comments</Text>
            <Box sx={{mt: 10, d: 'flex', fDirection: 'row', gap: spacing.md}}>
              <Box>
                <Avatar
                  source={{
                    uri: 'https://yt3.googleusercontent.com/BGdBUaW8d09gMV3_MzryTEUoFP5NjuIB3zI7I5QDzI5fSVJSfZNChXGFEtEmQqJm4QMNiL3q2v4=s160-c-k-c0x00ffffff-no-rj',
                  }}
                  size={30}
                  variation="rounded"
                />
              </Box>
              <Box sx={{f: 1}}>
                <TextField
                  hideLabel
                  placeholder="Add a comment.."
                  sx={{h: 30, r: 30, bg: colors.grey[200], bWidth: 0}}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{mt: spacing.md}}>
          <Text variation="h3" sx={{weight: '500'}}>
            Shorts
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Box
              sx={{
                mt: spacing.md,
                d: 'flex',
                fDirection: 'row',
                gap: spacing.md,
              }}>
              <Box sx={{w: 150, h: 230, bg: 'red', r: 10, overflow: 'hidden'}}>
                <Image
                  source={{
                    uri: 'https://imgs.search.brave.com/oEQeiWvJrkM9WlhspNFd3xfHovJbQu65Iv-HQEWzZq0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/aXRzLW5vLXBzNS1w/cm8tYnV0LWktc2Nv/cmVkLTUtZ2FtZXMt/Zm9yLTEyMC1idWNr/cy1vbi1ibGFjay12/MC16NWlpZ296czl3/M2UxLmpwZWc_d2lk/dGg9NjQwJmNyb3A9/c21hcnQmYXV0bz13/ZWJwJnM9MTgxOTkw/MzMwZTBlYzZlMjZi/NWYxYjgwZGEwMWFi/YmM1OTk2MDQ2Yw',
                  }}
                  height={230}
                  width={150}
                />
              </Box>
              <Box sx={{w: 150, h: 230, bg: 'red', r: 10, overflow: 'hidden'}}>
                <Image
                  source={{
                    uri: 'https://i.pcmag.com/imagery/reviews/05C0yBOQyhHZX8Im2M2pjnT-1.fit_lim.size_1050x591.v1603475053.png',
                  }}
                  height={230}
                  width={150}
                />
              </Box>
              <Box sx={{w: 150, h: 230, bg: 'red', r: 10, overflow: 'hidden'}}>
                <Image
                  source={{
                    uri: 'https://imgs.search.brave.com/2zqn8CFVDWIBOd0gCS1qC5nu5I1Mme_AGXbxnXXZcAc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9leHRl/cm5hbC1wcmV2aWV3/LnJlZGQuaXQvZWxp/dGUtZGFuZ2Vyb3Vz/LWlzLWZyZWUtb24t/ZXBpYy1nYW1lcy10/aHJvdWdoLXR3aXRj/aC1wcmltZS12MC01/bEdPV01BcXdVMG13/NDR6Q3pYaU81QnBw/TUpZZVFEZ0VUcTVq/ZFhtcUVZLmpwZz93/aWR0aD02NDAmY3Jv/cD1zbWFydCZhdXRv/PXdlYnAmcz00M2Fl/YTE2MTYyYmVlOTRi/NjZhZDMyNDU5MDc3/OTQ1MzM0MGNiMmZj',
                  }}
                  height={230}
                  width={150}
                />
              </Box>
            </Box>
          </ScrollView>
        </Box>
      </Container>
    </Box>
  );
};
