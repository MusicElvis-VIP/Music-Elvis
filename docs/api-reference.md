# API Reference

## NLSP Engine

The Natural Language Song Production (NLSP) engine is the core component of MusicElvis, providing music generation capabilities through natural language processing.

### Class: NLSPEngine

#### Constructor

```typescript
constructor(config: NLSPConfig)
```

Creates a new instance of the NLSP engine with the specified configuration.

**Parameters:**
- `config`: Configuration object for the NLSP engine

#### Methods

##### generateMusic

```typescript
async generateMusic(prompt: string): Promise<AudioData>
```

Generates music based on a natural language prompt.

**Parameters:**
- `prompt`: Natural language description of the desired music

**Returns:**
- Promise resolving to the generated audio data

##### analyzePrompt

```typescript
async analyzePrompt(prompt: string): Promise<MusicAttributes>
```

Analyzes a prompt to extract musical attributes.

**Parameters:**
- `prompt`: Natural language description to analyze

**Returns:**
- Promise resolving to the extracted musical attributes

## Audio Processor

The Audio Processor handles all audio-related operations, including synthesis and mastering.

### Class: AudioProcessor

#### Methods

##### processAudio

```typescript
async processAudio(audioData: Float32Array): Promise<Float32Array>
```

Processes raw audio data through the audio pipeline.

**Parameters:**
- `audioData`: Raw audio data as Float32Array

**Returns:**
- Promise resolving to the processed audio data

##### applyMastering

```typescript
async applyMastering(audioData: Float32Array): Promise<Float32Array>
```

Applies professional mastering effects to the audio.

**Parameters:**
- `audioData`: Audio data to master

**Returns:**
- Promise resolving to the mastered audio data

## Elvis Voice Model

The Elvis Voice Model provides Elvis Presley-style voice synthesis capabilities.

### Class: ElvisVoiceModel

#### Methods

##### synthesizeVoice

```typescript
async synthesizeVoice(text: string, style: string): Promise<Float32Array>
```

Synthesizes Elvis-style vocals from text.

**Parameters:**
- `text`: Lyrics to synthesize
- `style`: Vocal style to apply

**Returns:**
- Promise resolving to the synthesized vocal audio data

##### adjustVoiceCharacteristics

```typescript
async adjustVoiceCharacteristics(era: '50s' | '60s' | '70s'): Promise<void>
```

Adjusts voice characteristics to match specific Elvis eras.

**Parameters:**
- `era`: Target Elvis era for voice characteristics