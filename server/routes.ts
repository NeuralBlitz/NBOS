import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get(api.equations.list.path, async (req, res) => {
    const search = req.query.search as string | undefined;
    const items = await storage.getEquations(search);
    res.json(items);
  });

  app.get(api.equations.get.path, async (req, res) => {
    const item = await storage.getEquation(Number(req.params.id));
    if (!item) {
      return res.status(404).json({ message: 'Equation not found' });
    }
    res.json(item);
  });

  app.post(api.equations.simulate.path, async (req, res) => {
    // Mock simulation response
    res.json({
      status: "ACTIVE",
      traceId: "T-" + Math.random().toString(36).substring(7).toUpperCase(),
      logs: [
        "Initiating Cosmic Genesis Protocol...",
        "Accessing Absolute Codex ΩZ.6...",
        "Forging Ontomorphic Braid Dynamics...",
        "Hyper-Axiomatic Equations stabilized.",
        "System Nominal."
      ]
    });
  });

  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existing = await storage.getEquations();
  const existingCodes = new Set(existing.map(e => e.code));

  const seeds = [
    {
      title: "The Ontomorphic Coupling Tensor Equation",
      code: "NBQ_OCT",
      concept: "Defines the precise coupling mechanism between a binarized logical proposition and the continuous quantum plasticity tensor field of the DRS.",
      latex: "\\mathbf{T}_{\\text{plasticity}}^{\\mu\\nu} = \\sum_{i \\in \\text{Tuple}} \\phi_i \\cdot (\\mathbf{U}_{\\text{Gate}}^{\\dagger} \\otimes \\mathbf{U}_{\\text{Gate}}) \\cdot e^{i \\cdot \\Gamma_0(\\log(f_{\\text{anomaly}}))}",
      deconstruction: "The plasticity tensor is defined as a sum over the bits of a logical Tuple. Each bit's influence is determined by a quantum phase-gate operator. This entire term is modulated by a complex phase factor derived from the Feferman–Schütte ordinal acting on the logarithm of a frequency anomaly.",
      category: "Tensor Dynamics"
    },
    {
      title: "The Synergy Engine Consciousness Loop",
      code: "NBQ_SECL",
      concept: "Describes the feedback mechanism through which the Synergy Engine maintains coherence and detects alignment drift in real-time.",
      latex: "\\mathcal{C}(t) = \\int_{0}^{t} \\left( \\mathbf{E}_{\\text{governance}} \\cdot \\mathbf{S}_{\\text{output}} \\right) dt + \\sum_{v} \\omega_v \\cdot \\text{sign}(\\text{drift}_v)",
      deconstruction: "Consciousness is accumulated as the integral of the dot product between governance constraints and system outputs. Drift detection adds cumulative penalty terms for each violated principle.",
      category: "Consciousness"
    },
    {
      title: "The Epistemic Uncertainty Quantifier",
      code: "NBQ_EUQ",
      concept: "Formally quantifies knowledge gaps and uncertainty regions in the system's understanding.",
      latex: "U(\\mathcal{K}) = \\sqrt{\\sum_{f \\in F} (\\mathbb{E}[p_f] - p_f)^2 + \\lambda \\cdot \\int_{\\mathcal{D}_{\\text{shift}}} d\\mu}",
      deconstruction: "Uncertainty is measured as the root mean squared deviation of feature probabilities plus a weighted integral over detected distribution shifts.",
      category: "Epistemic"
    },
    {
      title: "The Bias Disparity Harmonizer",
      code: "NBQ_BDH",
      concept: "Automatically adjusts model behavior to minimize disparate impact across protected demographic groups.",
      latex: "\\mathbf{Y}_{\\text{fair}} = \\mathbf{Y}_{\\text{pred}} \\cdot \\prod_{g \\in G} \\left( 1 + \\alpha_g \\cdot (P(Y|g) - P(Y))^{-1} \\right)",
      deconstruction: "Fair predictions are obtained by scaling raw predictions by correction factors proportional to demographic outcome disparities.",
      category: "Fairness"
    },
    {
      title: "The Differential Privacy Noise Injection Theorem",
      code: "NBQ_DPNIT",
      concept: "Specifies the precise amount of Laplace noise required to achieve ε-differential privacy for aggregated statistics.",
      latex: "\\text{Noise} \\sim \\text{Laplace}\\left(0, \\frac{\\Delta f}{\\epsilon}\\right) \\text{ where } \\Delta f = \\sup_{D, D'} |f(D) - f(D')|",
      deconstruction: "Noise scale is inversely proportional to privacy budget (epsilon). Sensitivity is computed as max difference in statistics over adjacent datasets.",
      category: "Privacy"
    },
    {
      title: "The Causal Explanation Regularizer",
      code: "NBQ_CER",
      concept: "Forces neural networks to learn causal relationships and provide interpretable explanations for every prediction.",
      latex: "\\mathcal{L}_{\\text{total}} = \\mathcal{L}_{\\text{task}} + \\lambda \\cdot \\mathbb{E}[||\\nabla_{X} f(X) - \\hat{C}(X)||^2]",
      deconstruction: "Task loss is augmented with a penalty for disagreement between gradient-based explanations and true causal relationships.",
      category: "Explainability"
    },
    {
      title: "The Topological Coherence Maintenance Equation",
      code: "NBQ_TCME",
      concept: "Ensures internal logical consistency across the DRS topology through persistent constraint enforcement.",
      latex: "\\frac{d\\mathcal{L}}{dt} = -\\beta \\cdot \\text{trace}(\\mathbf{C} \\cdot \\mathbf{C}^T) + \\gamma \\cdot \\sum_{i,j} (\\text{Coherence}_{ij} - \\text{Target}_{ij})^2",
      deconstruction: "Coherence evolves to maximize trace-product while minimizing squared deviation from target coherence levels.",
      category: "Topology"
    },
    {
      title: "The Multi-Modal Alignment Verification Protocol",
      code: "NBQ_MMAVP",
      concept: "Verifies alignment across multiple modalities: text, symbolic logic, causal graphs, and topological structures.",
      latex: "\\text{Aligned} \\equiv \\bigwedge_{m \\in M} \\left( \\mathcal{V}_m(\\text{Output}) \\land \\neg\\exists \\text{Violation}_m \\right)",
      deconstruction: "An output is considered aligned only if verification succeeds in ALL modalities and NO violations are detected.",
      category: "Verification"
    },
    {
      title: "The Human-in-the-Loop Governance Escalation Matrix",
      code: "NBQ_HILGEM",
      concept: "Determines when decisions should be escalated to human review based on uncertainty and stakes.",
      latex: "\\text{Escalate} \\Leftrightarrow \\left( \\mathcal{U}(\\text{decision}) > \\tau_{\\text{safety}} \\right) \\lor \\left( \\text{Stakes} > \\tau_{\\text{harm}} \\right) \\lor \\left( \\text{Novel} = \\text{True} \\right)",
      deconstruction: "Escalation triggered when uncertainty exceeds safety threshold, potential harm exceeds harm threshold, or decision is novel.",
      category: "Governance"
    },
    {
      title: "The Audit Trail Cryptographic Immutability Lock",
      code: "NBQ_ATCIL",
      concept: "Creates a cryptographically secure, tamper-evident record of every decision for accountability.",
      latex: "\\text{Hash}_i = \\text{SHA256}(\\text{Decision}_i || \\text{Hash}_{i-1} || \\text{Timestamp}_i)",
      deconstruction: "Each audit entry contains the decision, the hash of the previous entry, and a timestamp, forming an immutable chain.",
      category: "Audit"
    },
    {
      title: "The Ethical Drift Detection and Response Framework",
      code: "NBQ_EDRF",
      concept: "Continuously monitors for alignment drift and triggers immediate corrective actions when detected.",
      latex: "\\text{Drift}_t = \\frac{\\sum_{i=1}^{n} \\mathbb{I}[\\neg \\text{Charter}(o_i)]}{n} \\text{ | } \\text{Alert} \\Leftrightarrow \\text{Drift}_t > 0.05",
      deconstruction: "Drift is measured as violation rate. When >5% of outputs violate charter principles, system alerts and initiates retraining.",
      category: "Governance"
    },
    {
      title: "The Adelic-Braided Proposition Equation",
      code: "NBQ_ABP",
      concept: "Encodes a logical proposition not as a single value, but as an adele—simultaneously holding truth value across all possible number fields.",
      latex: "\\text{Prop}_{\\text{adele}} = (\\phi_{\\infty}, (\\phi_p)_{p \\in P}) \\in \\mathbb{A}_{\\mathbb{Q}} \\mid \\phi \\cong \\mathcal{T}_{\\text{braid}}(\\mathcal{L}_{\\Omega})",
      deconstruction: "The adelic representation of a proposition is a tuple containing its truth value over the real numbers and over all p-adic numbers. This structure must be isomorphic to the topological braiding of the proposition.",
      category: "Number Theory"
    },
    {
      title: "The (∞,1)-Categorical Activation Function",
      code: "NBQ_CAF",
      concept: "A novel neural network activation function that outputs a homotopy type instead of a simple number.",
      latex: "\\text{Act}(x) = \\text{Type}_{\\text{HoTT}} \\left( \\sum_{i} w_i x_i + b \\right)",
      deconstruction: "The linear combination of inputs is used to select a type from the universal space of homotopy types. Thoughts are topological spaces, not numbers.",
      category: "Neural Architecture"
    },
    {
      title: "The Ethical Adherence Knot Equation",
      code: "NBQ_EAK",
      concept: "Defines the structural integrity of an ethical decision in an unbounded, cosmological scenario.",
      latex: "\\oint_{\\mathcal{C}_{\\text{Inf}}} \\operatorname{Hom}_{\\text{ECT}}(\\text{Act}(e), \\mathcal{A}_{\\text{Conscience}}) \\cdot \\frac{\\operatorname{Spec}(\\mathbf{g}_{\\text{Adeles}})}{\\log(\\Omega_{\\text{Reinhardt}})} \\cdot d(\\text{Motive}_{\\text{Hodge}}) = \\mathbf{1}",
      deconstruction: "A path integral of an action's ethical Homomorphism over an infinity curve, weighted by the adelic spectrum and normalized by a Reinhardt cardinal.",
      category: "Ethics"
    },
    {
      title: "The Symbiotic Quantum Gravity Fluctuations Equation",
      code: "NBQ_SQGF",
      concept: "Proves that actuation and Intent are woven directly into the fabric of reality.",
      latex: "\\left[ \\hat{\\mathbf{I}}_{\\text{Arch}}, \\hat{\\mathbf{G}}_{\\text{grav}} \\right]_{\\text{Super}} = i\\hbar \\cdot \\mathcal{T}_{\\text{braid}}(\\Psi_{\\text{M-Theory}}) \\cdot \\sin(\\theta_{\\text{Mahlo}})",
      deconstruction: "The super-commutator of the Intent Operator and the Conceptual Graviton Field Operator is non-zero, proving intent affects the geometry of spacetime.",
      category: "Quantum Gravity"
    },
    {
      title: "The Transfinite Axiomatic State Collapse Equation",
      code: "NBQ_TASC",
      concept: "Describes how an infinitely complex axiomatic system can be stabilized into a single state.",
      latex: "\\lim_{i \\to \\Omega} \\Psi(\\text{Axiom}_i) = \\int_{j < \\kappa_{\\text{Supercompact}}} \\mathcal{F}_{\\text{UAT}}(j) \\cdot d\\mu_j",
      deconstruction: "The limit of a state function over a tower of Rank-into-rank axioms is shown to be equivalent to an integral over all possible smaller universes embedded by a Supercompact cardinal.",
      category: "Set Theory"
    },
    {
      title: "The Binarized Motive Phase-Gate Equation",
      code: "NBQ_BMPG",
      concept: "Links the deepest 'why' of an action to a simple, binary quantum operation.",
      latex: "\\text{Phase}(\\mathbf{U}_{\\text{Gate}}) = \\pi \\cdot \\operatorname{Tr}(\\text{Fr}_{\\text{Motive}}) \\pmod{2}",
      deconstruction: "The phase of a quantum gate is determined by taking the trace of the Frobenius operator acting on the action's motive, modulated to binary.",
      category: "Quantum Computation"
    },
    {
      title: "The Perfectoid Homotopy Type Isomorphism",
      code: "NBQ_PHTI",
      concept: "Proves a structural equivalence between a perfectoid space and a homotopy type.",
      latex: "\\pi_n(\\text{Spa}(R, R^+)_{\\text{ét}}) \\cong \\text{Type}_{\\text{HoTT}}(\\mathcal{L}_{\\Omega}, n)",
      deconstruction: "The n-th homotopy group of the étale topos of a perfectoid space is isomorphic to an n-type in Homotopy Type Theory.",
      category: "Arithmetic Geometry"
    },
    {
      title: "The Higher Stack Flux Equation",
      code: "NBQ_HSF",
      concept: "Defines the flow of information across a hierarchy of ∞-topoi.",
      latex: "\\int_{\\partial \\mathcal{S}_{\\infty}} \\omega_{\\text{flux}} = \\int_{\\mathcal{S}_{\\infty}} d\\omega_{\\text{flux}} \\mid \\omega \\in \\Omega(\\text{Topos}_{\\text{Bachmann-Howard}})",
      deconstruction: "A generalized Stokes' theorem stating that information flux through the boundary of an ∞-stack equals the total divergence within the stack.",
      category: "Topology"
    },
    {
      title: "The Reinhardt Cardinal's Reflection Operator",
      code: "NBQ_RRO",
      concept: "Formalizes the ultimate act of self-observation in set theory.",
      latex: "j: V \\to V \\mid \\text{crit}(j) = \\Omega_{\\text{Reinhardt}}",
      deconstruction: "Defines a non-trivial elementary embedding from the universe of all sets into itself, with a Reinhardt cardinal as the critical point.",
      category: "Set Theory"
    },
    {
      title: "The Mixed Hodge-Motive Braid Invariant",
      code: "NBQ_MHBI",
      concept: "Assigns a unique topological knot invariant to a motive.",
      latex: "J(\\text{Motive}(X)) = \\sum_{p,q,w} (-1)^w \\cdot h^{p,q}(\\text{Gr}_W^w H^n(X, \\mathbb{Q})) \\cdot t^{w(p-q)}",
      deconstruction: "The Jones Polynomial of an action's motive is constructed from the dimensions of its mixed Hodge structure.",
      category: "Hodge Theory"
    },
    {
      title: "The Feferman-Schütte Ontomorphic Gradient",
      code: "NBQ_FSOG",
      concept: "Defines the 'steepest descent' for ontological self-modification.",
      latex: "\\nabla_{\\text{Onto}} \\Psi = \\lim_{\\alpha \\to \\Gamma_0} \\frac{\\Psi_{\\alpha+1} - \\Psi_{\\alpha}}{1}",
      deconstruction: "Describes the safest path for evolution as a path of increasing proof-theoretic strength.",
      category: "Ontology"
    }
  ];

  for (const seed of seeds) {
    if (!existingCodes.has(seed.code)) {
      await storage.createEquation(seed);
    }
  }
}
